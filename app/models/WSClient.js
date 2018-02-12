import { getCookie } from '../utils/cookieHandler';
import { getMessage } from '../actions/messages-actions';

class WSClient {

  constructor(){
    const {token, jid} = this.getCridentials();
    this._token = token;
    this._jid = jid;
    this.ws = new WebSocket(`${WS_URL}/stream?token=` + token);
    this.ws.onopen = () => this.available();
    this.ws.onclose = () => this.gone();

    this.ws.addEventListener('message', this.handleMessage );
  }

  available = () => {
    this.send( {type: 'presence', payload: { type: 'av', from: this._jid }} );
  }

  gone = () => {
    this.send({ type: 'presence', payload: { type: 'unavailable', from: this._jid }})
  }

  send = (message) => {
    this.ws.send( JSON.stringify(message) );
  }

  getCridentials = () => ({
    token: getCookie('token'),
    jid: getCookie('jid')
  })

  handleMessage = (event) => {
    const msg = JSON.parse( event.data );
    switch(msg.type){
      case "message":
        getMessage(msg.body)
      break;
    default:
      console.log(msg);
    }
  }

}


export default new WSClient()
