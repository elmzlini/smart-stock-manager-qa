// merge-reports.js
const fs = require('fs');
const path = require('path');
const { merge } = require('mochawesome-merge');
const { create } = require('mochawesome-report-generator');

async function generateReport() {
  try {
    console.log('🔄 Fusion des rapports en cours...');
    
    const reportsDir = path.join(__dirname, 'cypress/reports/mochawesome');
    
    // Vérifier que le dossier existe
    if (!fs.existsSync(reportsDir)) {
      console.log('❌ Dossier reports/mochawesome introuvable');
      return;
    }

    // Lister les fichiers JSON disponibles
    const jsonFiles = fs.readdirSync(reportsDir)
      .filter(file => file.endsWith('.json') && !file.includes('final-report'));
    
    console.log(`📊 ${jsonFiles.length} fichiers JSON trouvés :`);
    jsonFiles.forEach(file => console.log(`   - ${file}`));

    if (jsonFiles.length === 0) {
      console.log('❌ Aucun fichier JSON trouvé. Exécutez d\'abord les tests.');
      return;
    }

    // Fusionner tous les rapports JSON
    const report = await merge({
      files: jsonFiles.map(f => path.join(reportsDir, f)),
    });

    console.log('✅ Fusion réussie !');

    // Générer le rapport HTML
    await create(report, {
      reportDir: reportsDir,
      inline: true,
      saveJson: true,
      reportFilename: 'final-report',
      charts: true,
      timestamp: new Date().toISOString().replace(/[:.]/g, '-'),
    });

    console.log('✅ Rapport HTML généré avec succès !');
    console.log(`📁 Emplacement : ${path.join(reportsDir, 'final-report.html')}`);
    
    // Ouvrir automatiquement le rapport
    const fullPath = path.join(reportsDir, 'final-report.html');
    console.log(`🔗 Ouvrez ce fichier : ${fullPath}`);
    
    // Tenter d'ouvrir le rapport dans le navigateur par défaut
    const startCommand = process.platform === 'win32' ? 'start' : 'open';
    require('child_process').exec(`${startCommand} "${fullPath}"`);
    
  } catch (error) {
    console.error('❌ Erreur :', error.message);
  }
}

generateReport();