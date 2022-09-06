import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useForm } from "react-hook-form";

export default function Login({ setNameHendler }) {
    const { register, handleSubmit } = useForm();
    let navigate = useNavigate();



    const onSubmit = async (data) => {
        const { email, password } = data;
        const response = await axios.post('http://localhost:4000/auth/login', { email, password }, { withCredentials: true });
        if (response.status === 400) {
            console.log("Ошибка ответа авторизации")
        } else if (response.status === 200) {
            const user = { id: response.data.id, name: response.data.name };
            setNameHendler(user.name)
            navigate("/")
        }
    };
    return (
        <div >
            <h2>Войдите на сайт</h2>
            <hr />
            <div className="container-md">
                <div>
                    <form onSubmit={handleSubmit(onSubmit)} className="p-4 p-md-5 border rounded-3 bg-light">
                        <div className="form-floating mb-3">
                            <input type="email" {...register("email")} className="form-control" id="floatingInput" placeholder="name@example.com" />
                            <label htmlFor="floatingInput">Email address</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="password" {...register("password")} className="form-control" id="floatingPassword" placeholder="Password" />
                            <label htmlFor="floatingPassword">Password</label>
                        </div>
                        <button className="w-100 btn btn-lg btn-primary" type="submit">Sign up</button>
                        <hr className="my-4" />
                        <small className="text-muted">By clicking Sign up, you agree to the terms of use.</small>
                    </form>
                </div>
            </div>
        </div>
    )

}