import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, registerUser } from "../redux/auth/action";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const { currentUser, error } = useSelector(state => state.auth);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isLogin) {
            dispatch(loginUser(email, password));
        } else {
            dispatch(registerUser({ name, email, password }));
        }
    };

    useEffect(() => {
        if (currentUser) {
            localStorage.setItem("jiomartUser", JSON.stringify(currentUser));
            navigate("/");
        }
    }, [currentUser, navigate]);

    return (
        <div className="max-w-md mx-auto mt-6 w-full bg-white p-8 rounded-xl" style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}>
            <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
                {isLogin ? "Login to JioMart" : "Create your JioMart Account"}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
                {!isLogin && (
                    <input type="text" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-[#0079ae]" />
                )}

                <input type="email" placeholder="Email" required value={email} onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-[#0079ae]" />

                <input
                    type="password" placeholder="Password" required value={password} onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-[#0079ae]" />

                <button type="submit" className="w-full bg-[#0079ae] text-white py-2 rounded-lg font-semibold hover:bg-[#0079ae] transition" >
                    {isLogin ? "Login" : "Sign Up"}
                </button>
            </form>

            {error && <p className="text-red-500 text-sm mt-2 text-center">{error}</p>}

            <p className="mt-4 text-center text-sm text-gray-600">
                {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
                <button onClick={() => setIsLogin(!isLogin)} className="text-[#0079ae] font-semibold hover:underline" >
                    {isLogin ? "Sign Up" : "Login"}
                </button>
            </p>
        </div>
    );
};

export default SignIn;