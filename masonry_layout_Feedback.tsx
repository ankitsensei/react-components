// ⭐ Add Images 
// import Dp1 from "./dp/dp1.jpeg"
// import Dp2 from "./dp/dp2.jpeg"
// import Dp3 from "./dp/dp3.jpeg"
// import Dp4 from "./dp/dp4.jpeg"

const Feedback = () => {
    const data = [
        [
            Dp1,
            "Mariah Marceau",
            "I had a great experience using Riley & Grey for our wedding website! The platform was super user-friendly and made the whole process easy and enjoyable. Any time I had a question, their customer service team responded quickly and went above and beyond—even making updates directly on the site to help take the pressure off. I really appreciated the support and attention to detail. Highly recommend!",
            "Jun 1, 2025",
        ], [
            Dp2,
            "Erika Baracchini Prust",
            "I am 47 and not the most computer savy person in the world, but Riley & Grey made it so easy I actually had fun doing it with my then fiancée (now husband!) thank you so much and we will cherish the site we shared with our lived ones forever!",
            "May 27, 2025",
        ], [
            Dp3,
            "Kaela",
            "The most easy and user friendly way to send out invites and updates. Highly recommend",
            "May 4, 2025"
        ], [
            Dp2,
            "Erika Baracchini Prust",
            "I am 47 and not the most computer savy person in the world, but Riley & Grey made it so easy I actually had fun doing it with my then fiancée (now husband!) thank you so much and we will cherish the site we shared with our lived ones forever!",
            "May 27, 2025",
        ], [
            Dp3,
            "Kaela",
            "The most easy and user friendly way to send out invites and updates. Highly recommend",
            "May 4, 2025"
        ],
        [
            Dp4,
            "Julia B.",
            "User-friendly for both us and our guests! The personalization is wonderful. We find that we can create our website to reflect what we want and also stand out from other wedding websites!",
            "Jan 20, 2025"
        ],
        [
            Dp4,
            "Julia B.",
            "User-friendly for both us and our guests! The personalization is wonderful. We find that we can create our website to reflect what we want and also stand out from other wedding websites!",
            "Jan 20, 2025"
        ], [
            Dp1,
            "Mariah Marceau",
            "I had a great experience using Riley & Grey for our wedding website! The platform was super user-friendly and made the whole process easy and enjoyable. Any time I had a question, their customer service team responded quickly and went above and beyond—even making updates directly on the site to help take the pressure off. I really appreciated the support and attention to detail. Highly recommend!",
            "Jun 1, 2025",
        ],
    ]
    return (
        <div className="flex flex-col justify-center items-center mt-2 ">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-rusticRoadway bg-pink-600">Our couples love us,</h1>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-rusticRoadway bg-pink-600">and the feeling is mutual.</h1>
            <div className="columns-1 sm:columns-1 md:columns-2 lg:columns-3 gap-4  mt-10">
                {
                    data.map((item, index) => (
                        <div key={index} className="w-[360px] break-inside-avoid mb-4 border-2 rounded-2xl p-3 ">
                            <div className="flex gap-2 items-center">
                                <img src={item[0]} alt="dp" className="w-12 rounded-full border-1" />
                                <h1>{item[1]}</h1>
                            </div>
                            <p className="my-2">⭐⭐⭐⭐⭐</p>
                            <p>{item[2]}</p>
                            <p className="text-zinc-400 text-sm mt-2">{item[3]}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Feedback