export default function Post() {
    return (
        <div className="flex">
            <div>
                <ProfileInfo className="header" />
            </div>
            <PostContent />
            <InteractionOptions />
        </div>
    );
}

function ProfileInfo() {
    return (
        <div className="flex">
            <img src="className="profilepic" />
            <div>
                <h1>Username</h1>
                <h2>@username</h2>
            </div>
        </div>
    );
}

function PostContent() {
    return (
        <div className="song and caption">
            <p>This song is so good!</p>
            <img className="song api"/>
        </div>
    );
}

function InteractionOptions() {
    return (
        <div>
            <p>Like</p>
            <p>Comment</p>
        </div>
    );
}