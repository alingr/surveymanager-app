const keys = require('../../config/keys');

module.exports = survey => {
  return `
        <html>
            <body>
                <div style="text-align: center;">
                    <h3>We Value Your Feedback!</h3>
                    <p>In order to improve our services, we would be grateful if you could answer the following question:</p>
                    <p>${survey.body}</p>
                    <div>
                    <a href="${keys.redirectDomain}/api/surveys/${survey.id}/yes">Yes</a>
                    </div>
                    <div>
                    <a href="${keys.redirectDomain}/api/surveys/${survey.id}/no">No</a>
                    </div>
            </body>
        </html>
    `;
};
