import React from "react";
import { useNavigation } from "react-router-dom";

export default function SubmitBtn({ text }) {
        const navigation = useNavigation();

        const isSubmitting = navigation.state === "submitting";

        return (
                <button
                        className="btn btn-primary text-lg rounded-lg h-14 w-full"
                        disabled={isSubmitting}
                        type="submit"
                >
                        {isSubmitting ? (
                                <span className="loading loading-spinner loading-xs">Sending...</span>
                        ) : (
                                text || "Submit"
                        )}
                </button>
        );
}
