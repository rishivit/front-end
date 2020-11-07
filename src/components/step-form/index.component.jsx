import React, { Component } from 'react';
import Question1Component from './questions/question1.component';
import Question2Component from './questions/question2.component';
import Question3Component from './questions/question3.component';
import Question4Component from './questions/question4.component';
import Question5Component from './questions/question5.component';
import Question6Component from './questions/question6.component';
import Confirm from './questions/confirmation.component';
import Success from './questions/success.component';

export class StepFormIndexComponent extends Component {
    state= {
        step: 1,
        ques1: '',
        ques2: '',
        ques3: '',
        ques4: '',
        ques5: '',
        ques6: ''
    }

    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    }

    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    }

    handleChange = input => e => {
        this.setState({
            [input] : e.target.value
        })
    }

    render() {
        const { step } = this.state;
        const { ques1,ques2,ques3,ques4,ques5,ques6 } = this.state;

        const values = { ques1,ques2,ques3,ques4,ques5,ques6 }

        switch(step) {
            case 1:
                return (
                    <Question1Component 
                      nextStep = {this.nextStep}
                      handleChange={this.handleChange}
                      values={values}  
                    />
                );
            case 2:
                return (
                    <Question2Component 
                      nextStep = {this.nextStep}
                      prevStep = {this.prevStep}
                      handleChange={this.handleChange}
                      values={values}  
                    />
                );
            case 3:
                return (
                    <Question3Component 
                      nextStep = {this.nextStep}
                      prevStep = {this.prevStep}
                      handleChange={this.handleChange}
                      values={values}  
                    />
                );
            case 4:
                return (
                    <Question4Component 
                      nextStep = {this.nextStep}
                      prevStep = {this.prevStep}
                      handleChange={this.handleChange}
                      values={values}  
                    />
                );
            case 5:
                return (
                    <Question5Component 
                      nextStep = {this.nextStep}
                      prevStep = {this.prevStep}
                      handleChange={this.handleChange}
                      values={values}  
                    />
                );
            case 6:
                return (
                    <Question6Component 
                      nextStep = {this.nextStep}
                      prevStep = {this.prevStep}
                      handleChange={this.handleChange}
                      values={values}  
                    />
                );
            case 7:
                return (
                    <Confirm 
                      nextStep = {this.nextStep}
                      prevStep = {this.prevStep}
                      values={values}  
                    />
                );
            case 8:
                return <Success />;
            default:
                return <p> Error </p>;
        }
    }
}

export default StepFormIndexComponent;
