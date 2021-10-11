import axios from "axios"
import React from "react"

const WithCredentials = (Component) => {
    class WithSubscription extends React.Component {
        get = (uri) => {
            return axios
                .get(`https://social-network.samuraijs.com/api/1.0/${uri}`, {
                    withCredentials: true
                })
        }

        delete = (uri) => {
            return axios
                .delete(`https://social-network.samuraijs.com/api/1.0/${uri}`, {
                    withCredentials: true,
                    headers: {
                        'API-KEY': 'd2cc1721-f2b2-45e7-80e1-3f2114255295'
                    }
                })
        }

        post = (uri) => {
            return axios
                .post(`https://social-network.samuraijs.com/api/1.0/${uri}`, {}, {
                    withCredentials: true,
                    headers: {
                        'API-KEY': 'd2cc1721-f2b2-45e7-80e1-3f2114255295'
                    }
                })
        }

        render() {
            return (
                <Component {...this.props}
                    get={this.get} 
                    delete={this.delete}
                    post={this.post}/>
            );
        }
    }

    WithSubscription.displayName = `WithSubscription${Component.displayName || Component.name || 'Component'}`;

    return WithSubscription;
}

export default WithCredentials;