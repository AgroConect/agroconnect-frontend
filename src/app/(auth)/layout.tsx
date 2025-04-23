import Image from "next/image";

export default function Layout({ title, children }: { title: string; children: React.ReactNode }) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#fefef8] p-4 relative font-signika">
        <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md space-y-6 z-40">
          <div className="">
          {children}
          </div>
        </div>
        <div className="absolute bottom-10 left-20 opacity-10 text-[100px]">
        🌿
      </div>
       <Image
                    src={"/images/corn.png"}
                    alt="corn"
                    className="h-[26rem] w-[20rem] absolute opacity-50 top-[8rem] left-[15rem] -rotate-45 translate-40"
                    height={480}
                    width={480}
                  />
                   <Image
                    src={"/images/carrot.png"}
                    alt="corn"
                    className="h-[26rem] w-[20rem] absolute opacity-50 top-[4rem] right-[10rem] -rotate-45 translate-40"
                    height={480}
                    width={480}
                  />
      <div className="absolute top-[7rem] right-20 opacity-10 text-[100px]">
        🌱
      </div>
      </div>
    );
  }