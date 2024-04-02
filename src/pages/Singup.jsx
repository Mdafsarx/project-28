import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase";
import { useNavigate } from "react-router-dom";

const Singup = () => {

    const navigate = useNavigate()

    function handleLogin(e) {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        // console.log(email,password)
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const user = result.user;
                if (!user.emailVerified) {
                    alert('please verified your email')
                    return
                }
                console.log(user)
                alert('login successfully')
                navigate('/')
                

            })
            .catch((error) => {
                alert(error.message)
            })

    }
    return (
        <section className="p-6">
            <div className="container grid gap-6 mx-auto text-center justify-center">
                <div className="w-full px-6 py-16 rounded-md sm:px-12 md:px-16 xl:col-span-2">
                    <p className="text-3xl font-bold p-5 font-serif">
                        Login your account and explore our site
                    </p>
                    <form onSubmit={handleLogin} className="self-stretch space-y-3">
                        <div>
                            <label className="text-sm sr-only">Your name</label>
                            <input type="email" name="email" placeholder="Email" className="input input-bordered input-error w-full " />
                        </div>
                        <div>
                            <label className="text-sm sr-only">Email address</label>
                            <input type="password" name="password" placeholder="Password" className="input input-bordered input-error w-full " />

                        </div>
                        <input type="submit" name="" id="" value={'Login'} className="btn btn-success w-full" />
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Singup;