export default function Home() {
    return (
        <div style={{ padding: '20px' }}>
            <h1> Home Page</h1>
            <p>Welcome to our simple React Store.</p>
            <Link to="/products">
                <img src="C:\Users\shanm\Downloads\product image.jpeg"
                alt="store banner"
                style={{ width: "100%", cursor: "pointer"}}
                />
            </Link>

            <p>Click the image to explore products</p>

        </div>
    );
}