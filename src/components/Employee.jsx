function Employee(props) {
    return (
        <div className="m-2 py-8 px-8 max-w-sm bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
            <img
                className="object-cover rounded-full h-24 w-24 block mx-auto sm:mx-0 sm:shrink-0"
                src={props.img} 
                alt={`${props.name}'s profile`}
            />
            <div className="text-center space-y-2 sm:text-left">
                <div className="space-y-0.5">
                    <p className="text-lg text-black font-semibold">{props.name}</p>
                    <p className="text-slate-500 font-medium">{props.role}</p>
                </div>
                <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-purple-600">
                    Update
                </button>
            </div>
        </div>
    );
}

export default Employee;
