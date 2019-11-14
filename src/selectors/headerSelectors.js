import { Linking } from 'react-native';

export function backEvaluator(comparatorItem) {
    if (comparatorItem === undefined) {
        return '';
    }
    else {
        return '❮'
    }
}

export function linkEvaluator(comparatorItem) {
    if (comparatorItem === undefined) {
        return '';
    }
    else {
        return '⇱';
    }
}

export function handleLink(comparatorItem) {
    if (comparatorItem === undefined) {
        return '';
    }
    else {
        return Linking.openURL(comparatorItem);
    }
}
