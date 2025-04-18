export default function DropdownMenu() {
    return (
        <div className="absolute mt-2 bg-white shadow-lg p-4 grid grid-cols-2 gap-4 z-10 w-[600px] rounded-md border border-gray-200">
            <div className="hover:bg-gray-50 hover:rounded-xl cursor-pointer flex items-center gap-3">
                <div className="bg-red-100 p-6 rounded-xl">
                    <i className="fas fa-cogs text-[20px] text-red-500"></i>
                </div>
                <span className="text-lg font-medium">Website Maintenance</span>
            </div>
            <div className="hover:bg-gray-50 hover:rounded-xl cursor-pointer flex items-center gap-3">
                <div className="bg-orange-50 p-6 rounded-xl">
                    <i className="fas fa-code text-[25px] text-yellow-500"></i>
                </div>
                <span className="text-lg font-medium">Web & App Development</span>
            </div>
            <div className="hover:bg-gray-50 hover:rounded-xl cursor-pointer flex items-center gap-3">
                <div className="bg-green-50 p-6 rounded-xl">
                    <i className="fas fa-headset text-[20px] text-green-500"></i>
                </div>
                <span className="text-lg font-medium">IT Support</span>
            </div>
            <div className="hover:bg-gray-50 hover:rounded-xl cursor-pointer flex items-center gap-3">
                <div className="bg-purple-50 p-6 rounded-xl">
                    <i className="fas fa-robot text-[20px] text-purple-500"></i>
                </div>
                <span className="text-lg font-medium">3rd Party AI Solution</span>
            </div>
        </div>
    );
}
