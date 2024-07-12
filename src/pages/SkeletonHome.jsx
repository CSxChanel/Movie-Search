const SkeletonHome = () => {
    return (
        <div className="h-screen animate-pulse">
            <div className="w-auto h-[125px] bg-slate-300 rounded-b-2xl text-black font-bold">
                Loading...
            </div>
            <div className="flex flex-col justify-center items-center">
                <div className="min-w-[270px] h-[80px] bg-slate-300 mt-10"></div>
                <div className="min-w-[250px] h-[35px] bg-slate-300 mt-2"></div>
                <div className="min-w-[270px] h-[28px] bg-slate-300 rounded-full mt-10"></div>
                <div className="min-w-[70px] h-[30px] bg-slate-300 rounded-full mt-2"></div>
            </div>
        </div>
    );
};
export default SkeletonHome;
