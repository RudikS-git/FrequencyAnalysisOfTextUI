import { useState, useEffect } from 'react';
import './History.css';
import Table from "react-bootstrap/Table";
import React from "react";
import doRequest from "./doRequest";
import axios from "axios";
import {toast} from "react-toastify";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const History = () => {

    const [items, setItems] = useState([]);

    useEffect(async () => {
        await historyHandle();
    }, []);

    const historyHandle = async () => {
        const { success, data } = await doRequest(axios.get(`/analysis`));

        if(success) {
            setItems(data);
        }
    }

    const deleteHistoryItem = async (id) => {
        const { success, data } = await doRequest(axios.delete(`analysis/${id}`));

        if(success) {
            await historyHandle();
            toast.success("History item has deleted successfully")
        }
    }

    const downloadFile = async (id) => {
        const { success, data, headers } = await doRequest(axios.get(`analysis-file/${id}`, { responseType: 'blob' }));

        const a = document.createElement("a");
        document.body.appendChild(a);
        a.style = "display: none";
        const url  = window.URL.createObjectURL(data);
        a.href = url;
        a.download = headers['content-disposition'].split('filename=')[1].split(';')[0]
        a.click();
        window.URL.revokeObjectURL(url);
    }

    return (
        <div className="history">
            <div className="btn__back">
                <Link to="/">
                    <Button variant="secondary">Back</Button>
                </Link>
            </div>

            <Container>
                <Row>
                    <Col sm={12}>
                        <Table className="history__table" variant="dark" size="sm" responsive="sm" bordered>
                            <thead>
                            <tr>
                                <th>Text name</th>
                                <th>Amount symbols</th>
                                <th>Date</th>
                                <th>Actions</th>
                            </tr>
                            </thead>

                            <tbody>
                            {
                                items && items?.map(it => {
                                    return (
                                        <tr>
                                            <td>{it.text_name}</td>
                                            <td>{it.amount_symbols}</td>
                                            <td>{new Date(Date.parse(it.date_analysis)).toLocaleString("ru-RU")}</td>
                                            <td>
                                                <div className="btns__container">
                                                    <Link to={`/history/${it.id}`}>
                                                        <Button className="btn btn-blue">Details</Button>
                                                    </Link>
                                                    <Button onClick={() => deleteHistoryItem(it.id)} variant='danger'>Delete</Button>
                                                    <Button onClick={() => downloadFile(it.id)} variant='secondary'>Download</Button>
                                                </div>

                                            </td>
                                        </tr>
                                    )
                                })
                            }
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </div>


    )
}

export default History;