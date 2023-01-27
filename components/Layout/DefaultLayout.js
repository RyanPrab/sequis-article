import Header from "../Header"

export default function DefaultLayout(props) {
  return (
    <div className="flex flex-col space-y-4">
      <div className="top-0 inset-x-0 z-20">
        <Header />
      </div>
      <div className="bg-white min-screen">
        {props.children}
      </div>
    </div>
  )
}
