import Header from "../Header"

export default function DefaultLayout(props) {
  const { catgories } = props;
  return (
    <>
      <div className="absolute fixed top-0 inset-x-0 z-20">
        <Header catgories={catgories} />
      </div>
      <div className="bg-white min-screen">

      </div>
    </>
  )
}
