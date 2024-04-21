import { useContext } from "react"
import { deleteRoom } from "../api/axios"
import { AuthContext } from "../types/authContext";
import AuthenticationContext from "../context/Auth/userContext";
import { Link, unstable_HistoryRouter, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
// { name, id }: { name: string, id: string }
const Delete = () => {
    const { name, id } = useParams();
    const { auth } = useContext(AuthenticationContext) as AuthContext;
    const router = useNavigate();

    const deleteroom = async (e) => {
        e.preventDefault();
        if (!id || !name) {
            return;
        }
        const resp = await deleteRoom(+id, auth.accessToken);
        // console.log(resp)
        if (resp?.status === 204) {
            toast.success(`Chat Room deleted Successfully!`);
            router("/");
        } else {
            toast.error(resp.response.data.error);
        }
    }
    return (
        <>
            <main className="delete-item layout">
                <div className="container">
                    <div className="layout__box">
                        <div className="layout__boxHeader">
                            <div className="layout__boxTitle">
                                <Link to="#" onClick={() => router(-1)}>
                                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                                        viewBox="0 0 32 32">
                                        <title>arrow-left</title>
                                        <path
                                            d="M13.723 2.286l-13.723 13.714 13.719 13.714 1.616-1.611-10.96-10.96h27.625v-2.286h-27.625l10.965-10.965-1.616-1.607z">
                                        </path>
                                    </svg>
                                </Link>
                                <h3>Back</h3>
                            </div>
                        </div>
                        <div className="layout__body">
                            <form className="form" onSubmit={(e) => {
                                e.preventDefault();
                                deleteroom(e);
                            }}>
                                <div className="form__group">
                                    <p>Are you sure you want to delete "{name}"?</p>
                                </div>

                                <div className="for__group" >
                                    <input className="btn btn--main" type="submit" value="Confirm" />
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </main >
        </>
    )
}

export default Delete
