import { FormattedMessage } from 'react-intl';

export default function BooksTableHeader() {
    return (
        <thead>
        <tr>
            <th>#</th>
            <th>ISBN</th>
            <th><FormattedMessage id="title" /></th>
            <th><FormattedMessage id="author" /></th>
            <th><FormattedMessage id="publisher" /></th>
            <th></th>
        </tr>
        </thead>
    );
};