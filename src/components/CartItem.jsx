import { useDispatch } from "react-redux";
import { editItem, removeItem } from "../features/cart";
import { formatPrice } from "../utils";

export default function CartItem({ cartItem }) {
        const dispatch = useDispatch();
        const { cartId, title, image, price, amount, total, color, company } = cartItem;

        const removeItemFromTheCart = () => {
                dispatch(removeItem({ cartId }));
        };

        const handleAmountChange = (e) => {
                const value = parseInt(e.target.value);
                dispatch(editItem({ cartId, amount: value }));
        };

        return (
                <article
                        key={cartId}
                        className="mb-12 flex flex-col gap-y-4 sm:flex-row flex-wrap border-b rounded-lg p-3 border-base-400 pb-6 last:border-b-0"
                >
                        <img src={image} alt={title} className="w-24 h-24 object-cover sm:h-32 sm:w-32 rounded-lg" />
                        <div className="sm:ml-16 w-48">
                                <h3 className="capitalize text-sm md:text-lg lg:text-2xl font-bold">{title}</h3>
                                <h4 className="mt-2 capitalize text-sm md:text-md font-bold text-neutral-content">
                                        {company}
                                </h4>
                                <p className="mt-4 text-md capitalize flex items-center gap-x-2">
                                        Color:
                                        <span className="badge badge-sm" style={{ backgroundColor: color }}></span>
                                </p>
                        </div>
                        <div className="sm:ml-6">
                                <div className="form-control max-w-xs pt-1">
                                        <label
                                                htmlFor="amount"
                                                className="label p-0 capitalize text-sm md:text-md font-bold text-neutral-content"
                                        >
                                                <span className="label-text">Amount</span>
                                        </label>
                                        <select
                                                name="amount"
                                                id="amount"
                                                className="mt-3 select select-primary select-sm w-3/4 "
                                                value={amount}
                                                onChange={handleAmountChange}
                                        >
                                                {Array.from({ length: amount + 5 }, (_, index) => {
                                                        return (
                                                                <option key={index} value={index} className="text-lg">
                                                                        {index}
                                                                </option>
                                                        );
                                                })}
                                        </select>
                                        <button
                                                className="mt-3 link link-primary link-hover text-sm"
                                                onClick={removeItemFromTheCart}
                                        >
                                                Remove
                                        </button>
                                </div>
                        </div>
                        <p className="font-medium sm:ml-auto">{formatPrice(price)}</p>
                </article>
        );
}
