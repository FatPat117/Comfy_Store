import day from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import React from "react";
import { useLoaderData } from "react-router-dom";

day.extend(advancedFormat);

export default function OrdersList() {
        const { orders, meta } = useLoaderData();
        return (
                <div className="mt-8">
                        <h4 className="mb-4 capitalize text-md font-medium">Total orders: {meta.pagination.total}</h4>
                        <div className="overflow-x-auto">
                                <table className="table table-zebra ">
                                        <thead className="text-lg text-base-content text-center">
                                                <tr>
                                                        <th>Name</th>
                                                        <th>Address</th>
                                                        <th>Products</th>
                                                        <th>Costs</th>
                                                        <th className="hidden md:block">Date</th>
                                                </tr>
                                        </thead>
                                        <tbody>
                                                {orders.map((order, index) => {
                                                        const { name, address, numItemsInCart, orderTotal, createdAt } =
                                                                order.attributes;
                                                        return (
                                                                <tr
                                                                        key={order._id}
                                                                        className="text-md md:text-lg text-base-content text-center"
                                                                >
                                                                        <td>{name}</td>
                                                                        <td>{address}</td>
                                                                        <td>{numItemsInCart}</td>
                                                                        <td>{orderTotal}</td>
                                                                        <td className="hidden md:block">
                                                                                {day(createdAt).format(
                                                                                        "hh:mm a MMM Do, YYYY"
                                                                                )}
                                                                        </td>
                                                                </tr>
                                                        );
                                                })}
                                        </tbody>
                                </table>
                        </div>
                </div>
        );
}
