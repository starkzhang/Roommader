import React from 'react';
import { Alert, Text, TextInput, StyleSheet, View, ScrollView, Button } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

export default class Preferences extends React.Component {
    constructor(props) {
        super(props);

        this.inputRefs = {};

        this.state = {
            priceRange1: undefined,
            priceRange2: undefined,
            items: [
                {
                    label: '$400',
                    value: '$400',
                },
                {
                    label: '$600',
                    value: '$600',
                },
                {
                    label: '$800',
                    value: '$800',
                },
                {
                    label: '$1000',
                    value: '$1000',
                },
                {
                    label: '$1200',
                    value: '$1200',
                },
                {
                    label: '$1400',
                    value: '$1400',
                },
                {
                    label: '$1600',
                    value: '$1600',
                },
                {
                    label: '$1800',
                    value: '1800',
                },
                {
                    label: '$2000',
                    value: '$2000',
                },
            ],
            sleepHours1: undefined,
            items3: [
                {
                    label: '8pm-10pm',
                    value: '8pm-10pm',
                },
                {
                    label: '10pm-12am',
                    value: '10pm-12am',
                },
                {
                    label: '12am-2am',
                    value: '12am-2am',
                },
                {
                    label: 'past 2am',
                    value: 'past 2am',
                },
            ],
            sleepHours2: undefined,
            items4: [
                {
                    label: '4am-6am',
                    value: '4am-6am',
                },
                {
                    label: '6am-8am',
                    value: '6am-8am',
                },
                {
                    label: '8am-10am',
                    value: '8am-10am',
                },
                {
                    label: 'past 10am',
                    value: 'past 10am',
                },
            ],
            noise: undefined,
            items5: [
                {
                    label: 'Dead silent',
                    value: 'deadSilent',
                },
                {
                    label: 'Casual chatting',
                    value: 'Casual chatting',
                },
                {
                    label: 'Noisy',
                    value: 'Noisy',
                },
                {
                    label: 'No preference',
                    value: 'No preference',
                },
            ],
            drugs: undefined,
            alcohol: undefined,
            guests: undefined,
            pets: undefined,
            items6: [
                {
                    label: 'Yes',
                    value: 'yes',
                },
                {
                    label: 'No',
                    value: 'no',
                },
            ],
        };
    }

    componentDidMount() {
        // if the component is using the optional `value` prop, the parent
        // has the abililty to both set the initial value and also update it
        setTimeout(() => {
            this.setState({
                priceRange1: 'red',
            });
        }, 1000);

    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <Text>What&rsquo;s your price range?</Text>
                <RNPickerSelect
                    placeholder={{
                        label: 'Select a price...',
                        value: null,
                        color: '#9EA0A4',
                    }}
                    items={this.state.items}
                    onValueChange={(value) => {
                        this.setState({
                            priceRange1: value,
                        });
                    }}
                    onUpArrow={() => {
                        this.inputRefs.name.focus();
                    }}
                    onDownArrow={() => {
                        this.inputRefs.picker2.togglePicker();
                    }}
                    style={{ ...pickerSelectStyles }}
                    value={this.state.priceRange1}
                    ref={(el) => {
                        this.inputRefs.picker = el;
                    }}
                />

                <View style={{ paddingVertical: 2 }} />

                <RNPickerSelect
                    placeholder={{
                        label: 'Select a price...',
                        value: null,
                        color: '#9EA0A4',
                    }}
                    items={this.state.items}
                    onValueChange={(value) => {
                        this.setState({
                            priceRange2: value,
                        });
                    }}
                    onUpArrow={() => {
                        this.inputRefs.name.focus();
                    }}
                    onDownArrow={() => {
                        this.inputRefs.picker2.togglePicker();
                    }}
                    style={{ ...pickerSelectStyles }}
                    value={this.state.priceRange2}
                    ref={(el) => {
                        this.inputRefs.picker = el;
                    }}
                />

                <View style={{ paddingVertical: 5 }} />

                <Text>When do you go to bed?</Text>
                <RNPickerSelect
                    placeholder={{
                        label: 'Select a time...',
                        value: null,
                        color: '#9EA0A4',
                    }}
                    items={this.state.items3}
                    onValueChange={(value) => {
                        this.setState({
                            sleepHours: value,
                        });
                    }}
                    onUpArrow={() => {
                        this.inputRefs.picker.togglePicker();
                    }}
                    onDownArrow={() => {
                        this.inputRefs.company.focus();
                    }}
                    style={{ ...pickerSelectStyles }}
                    value={this.state.sleepHours1}
                    ref={(el) => {
                        this.inputRefs.picker2 = el;
                    }}
                    useNativeAndroidPickerStyle={false}
                />

                <View style={{ paddingVertical: 5 }} />

                <Text>When do you wake up?</Text>
                <RNPickerSelect
                    placeholder={{
                        label: 'Select a time...',
                        value: null,
                        color: '#9EA0A4',
                    }}
                    items={this.state.items4}
                    onValueChange={(value) => {
                        this.setState({
                            sleepHours: value,
                        });
                    }}
                    onUpArrow={() => {
                        this.inputRefs.picker.togglePicker();
                    }}
                    onDownArrow={() => {
                        this.inputRefs.company.focus();
                    }}
                    style={{ ...pickerSelectStyles }}
                    value={this.state.sleepHours2}
                    ref={(el) => {
                        this.inputRefs.picker2 = el;
                    }}
                    useNativeAndroidPickerStyle={false}
                />

                <View style={{ paddingVertical: 5 }} />
                <Text>What is your preferred noise level?</Text>
                <RNPickerSelect
                    placeholder={{
                        label: 'Select an option...',
                        value: null,
                        color: '#9EA0A4',
                    }}
                    items={this.state.items5}
                    onValueChange={(value) => {
                        this.setState({
                            noise: value,
                        });
                    }}
                    onUpArrow={() => {
                        this.inputRefs.picker.togglePicker();
                    }}
                    onDownArrow={() => {
                        this.inputRefs.company.focus();
                    }}
                    style={{ ...pickerSelectStyles }}
                    value={this.state.noise}
                    ref={(el) => {
                        this.inputRefs.picker2 = el;
                    }}
                    useNativeAndroidPickerStyle={false}
                />

                <View style={{ paddingVertical: 5 }} />

                <Text>Drugs?</Text>
                <RNPickerSelect
                    placeholder={{
                        label: 'Select an option...',
                        value: null,
                        color: '#9EA0A4',
                    }}
                    items={this.state.items6}
                    onValueChange={(value) => {
                        this.setState({
                            drugs: value,
                        });
                    }}
                    onUpArrow={() => {
                        this.inputRefs.picker.togglePicker();
                    }}
                    onDownArrow={() => {
                        this.inputRefs.company.focus();
                    }}
                    style={{ ...pickerSelectStyles }}
                    value={this.state.drugs}
                    ref={(el) => {
                        this.inputRefs.picker2 = el;
                    }}
                    useNativeAndroidPickerStyle={false}
                />

                <View style={{ paddingVertical: 5 }} />

                 <Text>Alcohol?</Text>
                <RNPickerSelect
                    placeholder={{
                        label: 'Select an option...',
                        value: null,
                        color: '#9EA0A4',
                    }}
                    items={this.state.items6}
                    onValueChange={(value) => {
                        this.setState({
                            alcohol: value,
                        });
                    }}
                    onUpArrow={() => {
                        this.inputRefs.picker.togglePicker();
                    }}
                    onDownArrow={() => {
                        this.inputRefs.company.focus();
                    }}
                    style={{ ...pickerSelectStyles }}
                    value={this.state.alcohol}
                    ref={(el) => {
                        this.inputRefs.picker2 = el;
                    }}
                    useNativeAndroidPickerStyle={false}
                />
                <View style={{ paddingVertical: 5 }} />

                <Text>Guests?</Text>
                <RNPickerSelect
                    placeholder={{
                        label: 'Select an option...',
                        value: null,
                        color: '#9EA0A4',
                    }}
                    items={this.state.items6}
                    onValueChange={(value) => {
                        this.setState({
                            guests: value,
                        });
                    }}
                    onUpArrow={() => {
                        this.inputRefs.picker.togglePicker();
                    }}
                    onDownArrow={() => {
                        this.inputRefs.company.focus();
                    }}
                    style={{ ...pickerSelectStyles }}
                    value={this.state.guests}
                    ref={(el) => {
                        this.inputRefs.picker2 = el;
                    }}
                    useNativeAndroidPickerStyle={false}
                />

                <View style={{ paddingVertical: 5 }} />

                <Text>Pets?</Text>
                <RNPickerSelect
                placeholder={{
                    label: 'Select an option...',
                    value: null,
                    color: '#9EA0A4',
                }}
                items={this.state.items6}
                onValueChange={(value) => {
                    this.setState({
                        pets: value,
                    });
                }}
                onUpArrow={() => {
                    this.inputRefs.picker.togglePicker();
                }}
                onDownArrow={() => {
                    this.inputRefs.company.focus();
                }}
                style={{ ...pickerSelectStyles }}
                value={this.state.pets}
                ref={(el) => {
                    this.inputRefs.picker2 = el;
                }}
                useNativeAndroidPickerStyle={false}
                />
                <Button
					onPress={() => this.props.navigation.navigate('AppContents')}
					title="Submit"
					color="black"
               accessibilityLabel="Sign up for an account on our app."
               backgroundColor="blue"
					/>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 80,
        backgroundColor: '#fff',
        // justifyContent: 'center',
        paddingHorizontal: 10,
    },
});

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        paddingTop: 13,
        paddingHorizontal: 10,
        paddingBottom: 12,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 4,
        backgroundColor: 'white',
        color: 'black',
    },
    inputAndroid: {
        fontSize: 16,
        paddingTop: 13,
        paddingHorizontal: 10,
        paddingBottom: 12,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 4,
        backgroundColor: 'white',
        color: 'black',
    },
});
