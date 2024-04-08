import { memo, useState } from "react";
import './Crudjob.scss'

const Crudjob = () => {
    const [jobs, setJobs] = useState([]);
    const [showform, setShowform] = useState(false);
    const [image, setImage] = useState('');
    const [name, setName] = useState('');
    const [describe, setDescribe] = useState('');
    const handelClick = () => {
        setShowform(true);
    }
    const addJobs = (e) => {
        e.preventDefault();
        setJobs([...jobs, { image, name, describe }]);
        setName("");
        setImage("");
        setDescribe("");

    }
    const deleteJobs = (e) => {
        e.preventDefault();
        setJobs([])
    }
    return (
        <div className="crud-jobs">
            <div className="header">
                <h1>Quản lý jobs</h1>
                <button onClick={handelClick}>Thêm mới</button>
            </div>
            {showform && <form action="job">
                <label htmlFor="">Ảnh: </label>
                <input type="text" value={image} onChange={(e) => setImage(e.target.value)} placeholder="Ảnh..." />
                <br />
                <label htmlFor="">Tên: </label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Tên..." />
                <br />
                <label htmlFor="">Mổ tả: </label>
                <input type="text" value={describe} onChange={(e) => setDescribe(e.target.value)} placeholder="Mô tả..." />
                <br />
                <button onClick={addJobs}>Thêm</button>
                <button >Sửa</button>
                <button onClick={deleteJobs}>Xóa</button>
            </form>}
            <div className="job-table">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Ảnh</th>
                            <th>Tên job</th>
                            <th>Mô tả</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {jobs.map((item, index) => (
                            <tr key={index}>
                                <td>{index}</td>
                                <td><img src={item.name} alt="" /></td>
                                <td>{item.image}</td>
                                <td>{item.describe}</td>
                                <td>
                                    <button onClick={deleteJobs}>xóa</button>
                                    <button>sửa</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>


        </div>
    )
}
export default memo(Crudjob);