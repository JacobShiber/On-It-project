import { UserCard } from 'react-ui-cards';

const UserCardInfo = () => {

    const user = JSON.parse(localStorage.getItem('user'));

    let header;
    if(user.school == "Tech-Career") header = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fyt3.ggpht.com%2Fa%2FAATXAJzMngg7aI81JIURiwvQ4v0SQ7AkQ6pIzRqmRg%3Ds900-c-k-c0xffffffff-no-rj-mo&f=1&nofb=1'
    
    const values = [{value : user.school, name : "School"}, { value : user.role, name : "Role"}, { value : "Active", name : "Status"} ]
    return (
        <UserCard
        className="cardCss"
            // float
            header={header}
            avatar={user.img}
            name={user.firstName}
            positionName={user.course}
            stats= {values}
        />
    )
}

export default UserCardInfo;