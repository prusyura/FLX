function userCard(index){
    let infoCard = {
        key: index,
        balance: 100,
        transactionLimit: 100,
        historyLogs: []
    };
    this.index = {
        type: Number,
        unique: true
    };
    let error = 'Not enough money on your balance or transfer limit is small!';
    let date = new Date().toLocaleString('en-GB');
    const getCardOptions = function () {
        return infoCard;
    };
    const historyLogsAdd = function (operationType, credits, date) {
        let historyLogsInf = {
            operationType,
            credits,
            operationTime: date
        };
        infoCard.historyLogs.push(historyLogsInf)
    };
    const putCredits = function (limit) {
        infoCard.balance += limit;
        historyLogsAdd('Received credits', limit, date);
    };
    const takeCredits = function (limit) {
        if(infoCard.balance >= limit && limit <= infoCard.transactionLimit){
            infoCard.balance -= limit;
            historyLogsAdd('Withdrawal of credits', limit, date);
        }else{
            console.error(error);
        }
    };
    const setTransactionLimit = function (limit) {
        infoCard.transactionLimit = limit;
        historyLogsAdd('Transaction limit change', limit, date);
    };
    const transferCredits = function(limit){
        let taxed = 0.005;
        let limitTaxed = limit + limit * taxed;
        if (limitTaxed > infoCard.balance && limitTaxed > infoCard.transactionLimit){
            console.error(error);
        }else{
            this.takeCredits(limitTaxed);
            historyLogsAdd('Withdrawal of credits', limit, date);
            this.putCredits(limit);
            historyLogsAdd('Received credits', limit, date);
        }
    };
    return {
        getCardOptions,
        putCredits,
        takeCredits,
        setTransactionLimit,
        transferCredits
    };
}
class UserAccount{
    constructor(name){
        this.name = name;
        this.card = [];
        this.cardLimit = 3;
    }
    addCard(){
        if (this.card.length < this.cardLimit) {
            this.card.push(userCard(this.card.length + 1));
        } else {
            console.log('Error! It is a max number of cards!');
        }
    }
    getCardByKey(key) {
        return this.card[key - 1];
    }
}
// let user = new UserAccount('Bob');
// user.addCard()
// user.addCard()
// let card1 = user.getCardByKey(1);
// let card2 = user.getCardByKey(2);
// card1.putCredits(500);
// card1.setTransactionLimit(800);
// card1.transferCredits(300, card2);
// card2.takeCredits(50);
// console.log(card1.getCardOptions()); // see Figure 2
// console.log(card2.getCardOptions()); // see Figure 3