import {React} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent  from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import './Cards.css'

const useStyles = makeStyles({
    root:{
        maxWidth:1500,
    },
    title:{
        fontSize:14,
    },
    pos:{
        marginBottom:12,
    },
})

export default function Cards({posts, indexOfFirstPost, indexOfLastPost}) {

    const classes = useStyles();

    console.log(posts);
    const postSlice = posts.slice(indexOfFirstPost, indexOfLastPost)
    return (postSlice.map(post => {
        return (
            <>
                <div>
                    <div>
                        <Card className={classes.root} key={post.id}>
                            <CardContent>
                                <Typography className={classes.title} color="textSecondary" gutterBottom>
                                    {post.title}
                                </Typography>
                                <Typography variant="body2" component="p">
                                    {post.body}
                                </Typography>
                            </CardContent>
                        </Card>
                    </div>
                </div>
                
            </>
            
    
            
        )
    }))
    
}
