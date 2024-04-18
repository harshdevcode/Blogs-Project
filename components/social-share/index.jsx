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
	const toggleShareOpen = () => {
		setShareOpen(!shareOpen);
	};

	console.log(url);
	return (
		<div className="fixed cursor-pointer">
			{shareOpen &&
				(
					<div className={`${styles.shareContainer} ${shareOpen ? styles.open : ''}`} >
						<FacebookShareButton
							url={url}
							windowWidth={700}
							windowHeight={700}
							blankTarget={true}
						>
							<FacebookIcon size={32} round />
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
							<WhatsappIcon size={32} round />
						</WhatsappShareButton>
						<LinkedinShareButton
							url={url}
							windowWidth={700}
							windowHeight={700}
							blankTarget={true}
						>
							<LinkedinIcon size={32} round />
						</LinkedinShareButton>
						<TwitterShareButton
							url={url}
							windowWidth={700}
							windowHeight={700}
							blankTarget={true}
						>
							<TwitterIcon size={32} round />
						</TwitterShareButton>
						<EmailShareButton
							url={url}
							windowWidth={700}
							windowHeight={700}
							blankTarget={true}
						>
							<EmailIcon size={32} round />
						</EmailShareButton>
					</div>
				)}

			<button
				className='fixed right-[33px] bottom-[90px]'
				onClick={() => toggleShareOpen()}
			>
				<Share2 size={32} color={shareOpen ? "#ff8c00" : '#ff5c1e'} strokeWidth={3} />
			</button>
		</div>

	)
}

export default SocialShare