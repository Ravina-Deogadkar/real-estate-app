import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { getAdsAction } from '../store/action/ads-action';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';


const useStyles = (theme) => ({
	root: {
		display: "flex",
		marginLeft: "10%",
	},
	card: {
		padding: "5%"
	}
});
class ShowAdds extends Component {
	constructor(props) {
		super(props);
		console.log("show details");
		// var AdsData;
		// this.state={
		//     adsDetails:{

		//     }
		// }
		// console.log(this.state);
	}

	render() {
		const { classes, getAdsAction_action, adsDetails } = this.props;
		getAdsAction_action();
		// this.AdsData = this.props;
		console.log(adsDetails);
		return (
			<React.Fragment>
				<h2>Short Stay</h2>
				<div className={classes.root}>

					<Grid container spacing={3}>
						<Grid item xs={12}>
							<Card className={classes.card}>


								<CardHeader
									title={adsDetails.title}
								/>
								<CardMedia
									className={classes.media}
									image="../src/image/Ads.jpg"
									title="Ads"
								/>

								<CardContent>
									
									<Typography variant="h5" component="h2">
										{adsDetails.housetype}
									</Typography>
									<Typography className={classes.pos} color="textSecondary">
										{adsDetails.price}
									</Typography>
									<Typography variant="body2" component="p">
										{adsDetails.location}
									</Typography>
								</CardContent>

							</Card>
						</Grid>

					</Grid>
				</div>
			</React.Fragment>
		);
	}
}

ShowAdds.propTypes = {
	adsDetails: PropTypes.object,
	getAdsAction_action: PropTypes.func
}
const mapStateToProps = (state) => {
	return {
		adsDetails: state.adsDetails
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		getAdsAction_action: () => dispatch(getAdsAction())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(useStyles)(ShowAdds))