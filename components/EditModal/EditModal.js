import React from "react";
import Modal from "react-responsive-modal";
import { useForm } from "react-hook-form";

const EditModal = ({ open, onClose }) => {
    // form hook
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
        reset,
    } = useForm();

    // form submission handler
    const onSubmit = async (data) => {
        console.log(data);
    };

    return (
        <Modal
            open={open}
            onClose={onClose}
            center
            closeOnOverlayClick={false}
            classNames={{
                overlay: "addTaskModalCustomOverlay",
                modal: "addTaskModalCustomModal",
            }}
        >
            <div className="">
                <form
                    className="mt-8"
                    onSubmit={handleSubmit(onSubmit)}
                    autoComplete="off"
                >
                    {/* username row */}
                    <div className="flex flex-col">
                        <label
                            htmlFor="title"
                            className="capitalize text-xs font-semibold inline-block mb-2"
                        >
                            Username:
                        </label>
                        <input
                            type="text"
                            id="username"
                            className="outline-none border-tracker-200 border-[1px] w-full rounded-[4px] px-[10px] py-[4px] text-sm font-semibold text-black focus:border-tracker-400 transition-all duration-300"
                            {...register("username", {
                                required: {
                                    value: true,
                                    message: "Username is required",
                                },
                                maxLength: {
                                    value: 30,
                                    message: "Too long (max 30char)",
                                },
                                minLength: {
                                    value: 3,
                                    message: "Too short (min 3char)",
                                },
                            })}
                        />
                        {errors?.username && (
                            <span className="capitalize text-[11px] font-semibold inline-block mt-1 text-red-400 tracking-wide">
                                {errors?.username?.message}
                            </span>
                        )}
                    </div>
                    {/* button */}
                    <div className="mt-6 flex justify-center items-center">
                        <button
                            type="submit"
                            className="capitalize font-semibold text-sm bg-tracker-600 text-white px-6 py-2 rounded-sm transition-all duration-300 hover:bg-tracker-800 disabled:cursor-not-allowed"
                        >
                            {/* {isLoading ? "Loading..." : " add task"} */}{" "}
                            update
                        </button>
                    </div>
                </form>
            </div>
        </Modal>
    );
};

export default EditModal;
