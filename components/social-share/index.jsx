import { useState } from 'react';
import {
	FacebookShareButton,
	FacebookIcon,
	PinterestShareButton,
	PinterestIcon,
	RedditShareButton,
	RedditIcon,
	WhatsappShareButton,
	WhatsappIcon,
	LinkedinShareButton,
	LinkedinIcon,
	TwitterShareButton,
	TwitterIcon,
	EmailShareButton,
	EmailIcon
} from 'next-share';
import { Share2 } from 'lucide-react';
import styles from 'styles/components/social-share.module.css';


const SocialShare = ({ url, title }) => {
	const [shareOpen, setShareOpen] = useState(false);
	const [clicked, setClicked] = useState(false);

	const toggleShareOpen = () => {
		setShareOpen(!shareOpen);

		setClicked(true); // Set clicked to true when icon is clicked
		setTimeout(() => {
			setClicked(false); // Remove clicked class after a short delay
		}, 300);
	};
	return (
		<div className="fixed cursor-pointer">

			<div className={`${styles.shareContainer} ${shareOpen ? styles.open : ''}`} >
				<FacebookShareButton

					url={url}
					windowWidth={700}
					windowHeight={700}
					blankTarget={true}
				>
					<FacebookIcon size={32} round className={styles.icons} />
				</FacebookShareButton>
				{/* <PinterestShareButton
						windowWidth={700}
						windowHeight={700}
						url={url}
					>
						<PinterestIcon size={32} round />
					</PinterestShareButton> */}
				{/* <RedditShareButton
						url={url}
						windowWidth={700}
						windowHeight={700}
					>
						<RedditIcon size={32} round />
					</RedditShareButton> */}
				<WhatsappShareButton
					url={url}
					windowWidth={700}
					windowHeight={700}
					blankTarget={true}
				>
					<WhatsappIcon size={32} round className={styles.icons} />
				</WhatsappShareButton>
				<LinkedinShareButton
					url={url}
					windowWidth={700}
					windowHeight={700}
					blankTarget={true}
				>
					<LinkedinIcon size={32} round className={styles.icons} />
				</LinkedinShareButton>
				<TwitterShareButton
					url={url}
					windowWidth={700}
					windowHeight={700}
					blankTarget={true}
				>
					<TwitterIcon size={32} round className={styles.icons} />
				</TwitterShareButton>
				<EmailShareButton
					url={url}
					windowWidth={700}
					windowHeight={700}
					blankTarget={true}
				>
					<EmailIcon size={32} round className={styles.icons} />
				</EmailShareButton>
			</div>

			<div className={` fixed right-[22px] bottom-[90px]  ${clicked ? styles.clicked : ''}`}>
				<button
					className='pr-3 pl-2 py-2 bg-accent rounded-full '
					onClick={() => toggleShareOpen()}
				>
					<Share2 size={32} color='white' strokeWidth={2} />
				</button>
				<div className=' text-accent font-bold text-sm text-center'>Share</div>
			</div>
		</div>

	)
}

export default SocialShare