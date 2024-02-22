
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import AdminHeader from "./adminheader";

const AllTransaction = ()=>{
    /*
    const[trans,setTrans] = useState([])
    //const[app,setApp] = useState(null)
    
    useEffect(()=>{
        
        var uid = localStorage.getItem("uid");
        axios
        .get(`https://localhost:7151/api/Transaction/GetTransactionDetails`)
        .then((response) => {
            console.log("Inside user transactions")
            console.log(response)
            if(response.data.length>0){
                setTrans(response.data);
            }
            else{
                console.log("No data found.")
            }
        }).catch((error)=>{
            console.log(error)
        })
    },[])

    return (
        <div>
            <AdminHeader/>
                <h1  className="text-center mt-5">All Transaction History</h1>
                <Table striped bordered hover responsive>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Transaction ID</th>
                    <th>Date</th>
                    <th>Renting Start Date</th>
                    <th>Renting End Date</th>
                    <th>Amount</th>
                    <th>Mode</th>
                    <th>Status</th>  
                    <th>From user</th>                  
                    <th>To User</th>
                </tr>
                </thead>
                <tbody>
                {trans.map((tr, index) => (
                        
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>  {tr.id}</td>
                            <td>{tr.date}</td>
                            <td>
                                {tr.startdate}
                            </td>
                            <td>
                                {tr.enddate}
                            </td>
                            <td>
                                {tr.amount}
                            </td>
                            <td>
                                {tr.mode}
                            </td>
                            <td>
                                {tr.status==1?"Success":"failure"}
                            </td>
                            <td>
                                {tr.doneby.fname}
                            </td>
                            <td>
                                {tr.touser.fname}
                            </td>
                        </tr>
                ))}
                </tbody>
            </Table>
            <Footer/>
        </div>
    )
    */

    const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetch("https://localhost:7151/api/Transaction/GetTransactionDetails")
      .then((response) => response.json())
      .then((data) => {
        setTransactions(data);
        console.log(data);
        if (data.length > 0) {
          const userId = data[0].doneby;
          fetch(`https://localhost:7151/api/User/GetUserDetails?id=${userId}`)
            .then((userResponse) => userResponse.json())
            .then((userData) => {
              setUser(userData);
              console.log(userData);
            })
            .catch((error) =>
              console.error("Error fetching user data:", error)
            );
        }
        if (data.length > 0) {
            const ownerId = data[0].touser;
            fetch(`https://localhost:7151/api/User/GetUserDetails?id=${ownerId}`)
              .then((ownerResponse) => ownerResponse.json())
              .then((ownerData) => {
                setOwner(ownerData);
                console.log(ownerData);
              })
              .catch((error) =>
                console.error("Error fetching user data:", error)
              );
          }
      })
      .catch((error) => console.error("Error fetching transaction data:", error));
  }, []);

  const [user, setUser] = useState(null);
  const [owner, setOwner] = useState(null);

  return (
    <div>
      <AdminHeader />
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            {/* <th>#</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Mode</th>
            <th>User Name</th>
            <th>Owner Name</th> */}

            <th>#</th>
            <th>Transaction ID</th>
            <th>Date</th>
            <th>Renting Start Date</th>
            <th>Renting End Date</th>
            <th>Amount</th>
            <th>Mode</th>
            <th>Status</th>  
            <th>From user</th>                  
            <th>To User</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((tr, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{tr.id}</td>
              <td>{tr.date}</td>
              <td>{tr.startdate}</td>
              <td>{tr.enddate}</td>
              <td>{tr.amount}</td>
              <td>{tr.mode}</td>
              <td>{tr.status==1?"Success":"Failed"}</td>
              <td>{owner ? owner.fname : ""}</td>
              <td>{user ? user.fname : ""}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default AllTransaction;