import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import utilStyles from '../styles/Home.module.css'

export default function MediaCard({ title, description, createdAt }) {
	const date = new Date(createdAt).toUTCString();
	return (
		<div className={utilStyles.root}>
			<Card >
				<CardActionArea>
				<CardContent>
					<Typography gutterBottom variant="h5" component="h2">
						{title}
					</Typography>
					<Typography gutterBottom variant="h6" component="h6">
						{date}
					</Typography>
					<Typography variant="body2" color="textSecondary" component="p">
						{description}
					</Typography>
				</CardContent>
				</CardActionArea>
			</Card>
		</div>
	);
}
