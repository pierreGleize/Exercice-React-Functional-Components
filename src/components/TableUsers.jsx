

const TableUsers = ({dataArray, notification}) => {


    if(dataArray.length > 7){
        return new Error()
    }
    return (
        <table id="table">
            <thead>
                <tr>
                    <th>Nom</th>
                    <th>Utilisateur</th>
                    <th>Email</th>
                    <th>Adresse</th>
                </tr>
            </thead>
            <tbody>
                {
                    notification && <tr><td colSpan={4} style={{color: 'red'}}>Veuillez Patienter</td></tr>
                }
                {
                    dataArray.map(({id, name, username, email, address}) => {
                        return(
                            <tr key={id}>
                                <td>{name}</td>
                                <td>{username}</td>
                                <td>{email}</td>
                                <td>{address.street}{address.suite}{address.city}{address.zipecode}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    );
};

export default TableUsers;