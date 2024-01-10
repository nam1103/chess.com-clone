import { FooterSection } from "./_components/sections/footer-section";
import { PlaySection } from "./_components/sections/play-section";
import { TodaySection } from "./_components/sections/today-section";
import { WatchSection } from "./_components/sections/watch-section";

const LandingPage = () => {
	return (
		<div className="w-full flex flex-col">
			<PlaySection />
			<WatchSection />
			<TodaySection />
			<FooterSection />
		</div>
	);
};

export default LandingPage;
