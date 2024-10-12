import React from "react";
import Modal from "react-responsive-modal";
import { useForm } from "react-hook-form";
import { useUpdateContactMutation } from "@/redux/features/api/baseAPI";
import toast from "react-hot-toast";

const EditModal = ({ open, onClose, contact }) => {
    const { _id, username, avatar, email, phoneNumber, address } = contact;

    // update mutation
    const [updateContact, { data, isLoading, isError, error }] =
        useUpdateContactMutation();

    // form hook
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    // form submission handler
    const onSubmit = async (data) => {
        try {
            if (!data?.email) {
                delete data.email;
            }
            const response = await updateContact({ data, id: _id });
            if (response.data.status) {
                onClose(false);
                toast.success(response.data.message);
                reset();
            } else {
                toast.error(
                    `${response.data.message}(${response.data.result})`
                );
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
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
                                defaultValue={username}
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
                                defaultValue={email || ""}
                                {...register("email")}
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
                                defaultValue={phoneNumber}
                                {...register("phoneNumber", {
                                    required: {
                                        value: true,
                                        message: "Contact Number is required",
                                    },
                                    maxLength: {
                                        value: 15,
                                        message: "Too long (max 15char)",
                                    },
                                    minLength: {
                                        value: 11,
                                        message: "Too short (min 11char)",
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
                                defaultValue={address}
                                {...register("address", {
                                    required: {
                                        value: true,
                                        message: "address is required",
                                    },
                                    maxLength: {
                                        value: 100,
                                        message: "Too long (max 100char)",
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
                                defaultValue={avatar}
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
                        <button className="submit-btn" disabled={isLoading}>
                            {isLoading ? "Loading..." : "update now"}
                        </button>
                    </div>
                </form>
            </div>
        </Modal>
    );
};

export default EditModal;
