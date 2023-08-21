import '../Components/Login.css';
import {useEffect} from 'react';

const Login = () => {


    const diable = () => {
        const doc1 = document.getElementById('label1')
        const doc2 = document.getElementById('label2')
        const doc3 = document.getElementById('label3')
        const doc4 = document.getElementById('label4')

        doc1.style.boxShadow="none"
        doc2.style.boxShadow="none"
        doc3.style.boxShadow="none"
        doc4.style.boxShadow="none"


    }

    useEffect(()=>{
      diable();
    },[])


    return (
        <>

            <div className="containercha">

                <h3>Personal Information</h3>

                <form action="" method="">

                    <label htmlFor="fname" id="label1">First Name:</label>
                    <input type="text" id="name" name="fname" required />

                    <label htmlFor="lname" id="label2">Last Name:</label>
                    <input type="text" id="name" name="ename" required />

                    <label htmlFor="email" id="label3" >Email:</label>
                    <input type="email" id="email" name="email" required />

                    <label htmlFor="student_id" id="label4">Student ID:</label>
                    <input type="password" id="student_id" name="student_id" required />


                    <div id="butdiv" >

                        <a href="/lab1/p2/index3.html">
                            <button type="submit">Back</button>
                        </a>

                        <a href="/lab1/p2/index3.html">
                            <button type="submit">Next</button>
                        </a>

                    </div>

                </form>

            </div>

        </>

    )
}

export default Login