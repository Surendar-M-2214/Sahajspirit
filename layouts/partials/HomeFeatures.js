import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";

const HomeFeatures = ({ feature }) => {
  return (
<section className="section bg-theme-light">
	<div className="container">
		<div className="text-center">
			<h2>
				<span>Introduction</span>
			</h2>
      <p>The Sahaj Summit is an enriching and transformative event designed to help individuals embrace ease and naturalness (Sahaj) in all aspects of life. Through intellectual discussions, soulful performances, and practical strategies, the summit fosters inner peace, balance, and well-being.</p>
		</div>
		<div className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
			<div className="feature-card rounded-xl bg-white p-5 pb-8 text-center">
				<img alt="" loading="lazy" width="30" height="30" decoding="async" data-nimg="1" className="mx-auto"  src="/images/code.svg"/>
					<div className="mt-4">
						<h3 className="h5">Opening Session</h3>
            <div className="flex flex-col items-start text-left">
						<p className="mt-3">- Welcome address by the organizers. </p>
            <p className="mt-1 ">- Introduction to the concept of Sahaj and its relevance in modern life.</p>
            </div>
        	</div>
				</div>
				<div className="feature-card rounded-xl bg-white p-5 pb-8 text-center">
					<img alt="" loading="lazy" width="30" height="30" decoding="async" data-nimg="1" className="mx-auto"  src="/images/oop.svg"/>
          <div className="mt-4">
          <h3 className="h5 ">Intellectual Sessions  </h3>
       
          <div className="flex flex-col items-start text-left">
          <p className="mt-6 mx-4 font-semibold text-gray-700 ">Session 1: Strategies for Being Sahaj</p>
						<p className="my-2">- Talk by a very calm & renowned scholar or speaker who embraces Sahajta in his/her life. </p>
            <p className="my-1 ">- ⁠Practical approaches to staying calm, composed, and natural in challenging situations.</p>
            </div>
            </div>
					</div>
					<div className="feature-card rounded-xl bg-white p-5 pb-8 text-center">
						<img alt="" loading="lazy" width="30" height="30" decoding="async" data-nimg="1" className="mx-auto"  src="/images/user-clock.svg"/>
							<div className="mt-4">
								<h3 className="h5">Intellectual Sessions </h3>
                <div className="flex flex-col items-start text-left">
          <p className="mt-6 mx-4 font-semibold text-gray-700 ">Session 2: Tactics for Daily Integration</p>
						<p className="my-2">- Insights on applying Sahaj principles in personal and professional life. </p>
            <p className="my-1 ">- Case studies, success stories, and actionable strategies.</p>
            <p className="my-1 ">- Audience engagement through a short activity or exercise</p>
            </div>							</div>
						</div>
						<div className="feature-card rounded-xl bg-white p-5 pb-8 text-center">
							<img alt="" loading="lazy" width="30" height="30" decoding="async" data-nimg="1" className="mx-auto"  src="/images/love.svg"/>
								<div className="mt-4">
									<h3 className="h5">Fillers: Artistic and Soothing Performances</h3>
                  <div className="flex flex-col items-start text-left">
          <p className="mt-6 font-semibold text-gray-700 ">Duration: Interspersed throughout the program (10-15 minutes each)          </p>
						<p className="my-2"><span className="font-semibold">- Poetry:</span> Reflective and inspiring verses emphasizing Sahaj living. </p>
            <p className="my-1 "><span className="font-semibold">- Soothing Musical Instruments:</span> Performances using instruments like flute, sitar, or handpan.</p>
            <p className="my-1 "><span className="font-semibold">- Contemporary Kirtan:</span> Modern, calming devotional music to uplift and soothe.</p>
            </div>								</div>
							</div>
							<div className="feature-card rounded-xl bg-white p-5 pb-8 text-center">
								<img alt="" loading="lazy" width="30" height="30" decoding="async" data-nimg="1" className="mx-auto"  src="/images/speedometer.svg"/>
									<div className="mt-4">
										<h3 className="h5"> Evening Satvic Meal</h3>
                    <div className="flex flex-col items-start text-left">
										<p className="mt-3">- Participants will be treated to a wholesome and nourishing Satvic meal in the evening. </p>
                    <p className="my-2">- This meal is designed to provide a refreshing and grounding experience, aligned with the principles of simplicity, purity, and balance. </p>
                    </div>
                  </div>
								</div>
								<div className="feature-card rounded-xl bg-white p-5 pb-8 text-center">
									<img alt="" loading="lazy" width="30" height="30" decoding="async" data-nimg="1" className="mx-auto" src="/images/cloud.svg"/>
										<div className="mt-4">
											<h3 className="h5"> Closing Session</h3>
                      <div className="flex flex-col items-start text-left">
          <p className="mt-6 mx-4 font-semibold text-gray-700 ">Duration: 15 minutes</p>
						<p className="my-2">- Summary and key takeaways from the summit. </p>
            <p className="my-1 ">- Open floor for feedback and reflections</p>
            <p className="my-1 ">- Gratitude note and invitation for future collaborations.</p>
            </div>										</div>
									</div>
								</div>
							</div>
						</section>
  );
};

export default HomeFeatures;
