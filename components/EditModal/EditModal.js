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
            onClose={() => onClose(false)}
            center
            closeOnOverlayClick={false}
            classNames={{
                overlay: "modalOverlay",
                modal: "modalContainer",
            }}
        >
            <div className="">
                <div className="form-title">
                    <h4 className="title">update contact</h4>
                </div>
                <form
                    className="form"
                    onSubmit={handleSubmit(onSubmit)}
                    autoComplete="off"
                >
                    <div className="inputs-container">
                        {/* input-1: username */}
                        <div className="input-row">
                            <label htmlFor="username">contact name</label>
                            <input
                                type="text"
                                id="username"
                                placeholder="Type here"
                                {...register("username", {
                                    required: {
                                        value: true,
                                        message: "contact name is required",
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
                                <span className="error">
                                    {errors?.username?.message}
                                </span>
                            )}
                        </div>
                        {/* input-2: email */}
                        <div className="input-row">
                            <label htmlFor="email">email</label>
                            <input
                                type="text"
                                id="email"
                                placeholder="Type here"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: "email is required",
                                    },
                                })}
                            />
                            {errors?.email && (
                                <span className="error">
                                    {errors?.email?.message}
                                </span>
                            )}
                        </div>
                        {/* input-3: phoneNumber */}
                        <div className="input-row">
                            <label htmlFor="phoneNumber">Contact Number</label>
                            <input
                                type="text"
                                id="phoneNumber"
                                placeholder="Type here"
                                {...register("phoneNumber", {
                                    required: {
                                        value: true,
                                        message: "Contact Number is required",
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
                            {errors?.phoneNumber && (
                                <span className="error">
                                    {errors?.phoneNumber?.message}
                                </span>
                            )}
                        </div>
                        {/* input-4: address */}
                        <div className="input-row">
                            <label htmlFor="address">address</label>
                            <input
                                type="text"
                                id="address"
                                placeholder="Type here"
                                {...register("address", {
                                    required: {
                                        value: true,
                                        message: "address is required",
                                    },
                                    maxLength: {
                                        value: 50,
                                        message: "Too long (max 50char)",
                                    },
                                    minLength: {
                                        value: 3,
                                        message: "Too short (min 3char)",
                                    },
                                })}
                            />
                            {errors?.address && (
                                <span className="error">
                                    {errors?.address?.message}
                                </span>
                            )}
                        </div>
                        {/* input-5: avatar */}
                        <div className="input-row">
                            <label htmlFor="avatar">Profile picture</label>
                            <input
                                type="text"
                                id="avatar"
                                placeholder="Type here"
                                {...register("avatar", {
                                    required: {
                                        value: true,
                                        message:
                                            "Profile Photo URL is required",
                                    },
                                })}
                            />
                            {errors?.avatar && (
                                <span className="error">
                                    {errors?.avatar?.message}
                                </span>
                            )}
                        </div>
                    </div>
                    <div className="submit-btn-row">
                        <button className="submit-btn">update now</button>
                    </div>
                </form>
            </div>
        </Modal>
    );
};

export default EditModal;
