import Header from "../Header"

export default function DefaultLayout(props) {
  return (
    <>
      <div className="absolute fixed top-0 inset-x-0 z-20">
        <Header />
      </div>
      <div className="bg-white min-screen">

      </div>
    </>
  )
}
