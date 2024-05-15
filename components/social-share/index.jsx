import { useState, useEffect } from 'react';
import {
	FacebookShareButton,
	FacebookIcon,
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
		setClicked(true)
		setTimeout(() => {
			setClicked(false)
		}, 200)
	};

	const handleCloseOutsideClick = (e) => {
		const shareContainer = document.getElementById('shareContainer');
		const shareIcon = document.getElementById('shareIcon');
		if (shareContainer && !shareContainer.contains(e.target) && !shareIcon.contains(e.target)) {
			setShareOpen(false); // Close the share tray if clicked outside and not on the share icon
		}
	};

	useEffect(() => {
		document.addEventListener('mousedown', handleCloseOutsideClick);
		return () => {
			document.removeEventListener('mousedown', handleCloseOutsideClick);
		};
	}, []);

	return (
		<div className="fixed cursor-pointer">
			<div id="shareContainer" className={`${styles.shareContainer} ${shareOpen ? styles.open : ''}`}>
				<FacebookShareButton url={url} title={title} windowWidth={700} windowHeight={700} blankTarget={true}>
					<FacebookIcon size={32} round className={styles.icons} />
				</FacebookShareButton>
				<WhatsappShareButton url={url} windowWidth={700} windowHeight={700} blankTarget={true}>
					<WhatsappIcon size={32} round className={styles.icons} />
				</WhatsappShareButton>
				<LinkedinShareButton url={url} windowWidth={700} windowHeight={700} blankTarget={true}>
					<LinkedinIcon size={32} round className={styles.icons} />
				</LinkedinShareButton>
				<TwitterShareButton url={url} windowWidth={700} windowHeight={700} blankTarget={true}>
					<TwitterIcon size={32} round className={styles.icons} />
				</TwitterShareButton>
				<EmailShareButton url={url} windowWidth={700} windowHeight={700} blankTarget={true}>
					<EmailIcon size={32} round className={styles.icons} />
				</EmailShareButton>
			</div>
			<div className={`fixed right-[22px] bottom-[90px] `} id="shareIcon"  onClick={toggleShareOpen}>
				<button className={`pr-3 pl-2 py-2 rounded-full ${styles.shareBg} ${clicked ? styles.clicked : ''}`}>
					<Share2 size={32} color='#EB5424' strokeWidth={2} />
				</button>
				<div className=' text-accent font-bold text-sm text-center'>Share</div>
			</div>
		</div>
	)
}

export default SocialShare;
