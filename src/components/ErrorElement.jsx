import { useRouteError } from "react-router-dom";
const ErrorElement = () => {
        const error = useRouteError();

        return <h4 className="font-bold text-4xl">there was an error... </h4>;
};
export default ErrorElement;
