import {Component} from 'react';
import TxPreview from "../TxPreview/TxPreview";

class TxList extends Component {

    render() {
        return (
            <div>
                {this.props.txs.map(txn => <TxPreview key={txn.txnMetadata.seqNo} tx={txn}/>)}
            </div>
        )
    }
}

export default TxList;