import { motion, useScroll, useTransform } from "motion/react";

const ScrollIndicator = () => {

    const { scrollYProgress } = useScroll();

    const lineWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <div className="h-[200vh] p-[20px]">
            {/* Red Line */}
            <motion.div
                className="fixed top-0 left-0 h-[5px] bg-red-500"
                style={{
                    width: lineWidth,
                    transition: "width 0.1s ease"
                }}
            />

            {/* Random Text */}
            <div className="mt-[50px]">
                {[...Array(100)].map((_, index) => (
                    <p key={index} className="mt-[20px]">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni veritatis odio facere atque, quasi deserunt ducimus neque ipsum voluptatibus? Ratione pariatur dolorum modi alias rerum ullam? Voluptatem voluptate repellendus nemo quod veritatis ad ullam. Nostrum, cupiditate. Nostrum voluptates voluptate, facilis officiis perspiciatis rerum ut amet reprehenderit sed incidunt mollitia ipsam provident aperiam! Rerum consequuntur, porro perferendis accusamus, commodi unde quod magnam, at eius earum architecto eaque nemo voluptates quos ad excepturi tempore? Odit, consequuntur aspernatur! Atque architecto blanditiis dolorem aliquam, fugit quo. Consequuntur culpa illum reiciendis, cupiditate quisquam fuga, laborum quas, placeat minus quos sed ad commodi officia. Ea, ut.
                    </p>
                ))}
            </div>

        </div>
    )
}

export default ScrollIndicator