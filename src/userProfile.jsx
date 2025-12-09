import style from './Css/UserProfile.module.css'

function UserProfile () {
    return (
        <div>
            <h1 className={style.heading}>User Profile</h1>
            <div className={style.card}>
                <img className={style.img} src="https://images.ctfassets.net/hrltx12pl8hq/5n6WsG0BhM218KBS3Sr7iW/2e0467b376e202a39afe70f0f00a9a0c/Family-Day.jpg" alt="" />
                <div className={style.textWrap}>
                    <h4>Anil Sidhu</h4>
                    <p>Softwear Developer</p>
                </div>
            </div>
        </div>
    )
}

export default UserProfile;