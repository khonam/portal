export default function Lupa_Password() {
  return (
    <div className="h-screen">
      <div className="h-screen container mx-auto flex justify-center items-center">
        <div className="lg:border-2 lg:shadow-xl rounded-lg">
          <form className="space-y-2 p-4">
            <div>
              <input
                type="email"
                placeholder="Email anda ..."
                className="p-2 rounded-lg border-2 w-[20rem]"
              />
            </div>
            <div>
              <button
                type="submit"
                className="p-2 rounded-lg w-[20rem] bg-green-700 hover:bg-green-800 text-white font-semibold text-medium"
              >
                Kirim
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
