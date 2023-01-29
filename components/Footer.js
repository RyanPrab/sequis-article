export default function Footer(props) {
  return (
    <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row justify-between items-center bg-gray-900 p-6 -mt-6 container mx-auto">
      <div className="text-sm text-white font-semibold">
        This Should be Sequis Innovation Lab Logo
      </div>
      <div className="flex flex-col space-y-4 md:space-y-1 text-xs">
        <div className="text-orange-500">
          The more that you read, the more things you will know. The more that you learn, the more places you'll go
        </div>
        <div className="text-white">
          Created by the Innovation Lab for testing web development skills.
        </div>
      </div>
    </div>
  )
}
