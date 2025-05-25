#!/usr/bin/env node

/**
 * Setup script for Next.js Cursor AI Boilerplate
 * This script helps users customize the boilerplate for their project
 */

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function question(query) {
  return new Promise(resolve => rl.question(query, resolve));
}

async function setup() {
  console.log('🚀 Welcome to Next.js Cursor AI Boilerplate Setup!\n');
  
  try {
    // Get project details
    const projectName = await question('Project name (kebab-case): ');
    const projectDescription = await question('Project description: ');
    const authorName = await question('Author name: ');
    const authorEmail = await question('Author email: ');
    const githubUsername = await question('GitHub username: ');
    
    // Update package.json
    const packageJsonPath = path.join(process.cwd(), 'package.json');
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
    
    packageJson.name = projectName || 'my-nextjs-project';
    packageJson.description = projectDescription || 'A Next.js project built with Cursor AI';
    packageJson.author = `${authorName} <${authorEmail}>`;
    packageJson.repository = githubUsername 
      ? `https://github.com/${githubUsername}/${projectName}.git`
      : '';
    
    fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
    
    // Create .env.local from .env.example if it doesn't exist
    const envExamplePath = path.join(process.cwd(), '.env.example');
    const envLocalPath = path.join(process.cwd(), '.env.local');
    
    if (fs.existsSync(envExamplePath) && !fs.existsSync(envLocalPath)) {
      fs.copyFileSync(envExamplePath, envLocalPath);
      console.log('✅ Created .env.local from .env.example');
    }
    
    // Update README with project name
    const readmePath = path.join(process.cwd(), 'README.md');
    let readmeContent = fs.readFileSync(readmePath, 'utf8');
    readmeContent = readmeContent.replace(
      /# Next\.js Cursor AI Boilerplate/g,
      `# ${projectName || 'My Next.js Project'}`
    );
    readmeContent = readmeContent.replace(
      /your-username\/nextjs-cursor-boilerplate/g,
      `${githubUsername}/${projectName}`
    );
    fs.writeFileSync(readmePath, readmeContent);
    
    console.log('\n✅ Setup complete!');
    console.log('\nNext steps:');
    console.log('1. Edit .env.local with your API keys');
    console.log('2. Run: yarn dev');
    console.log('3. Start building with Cursor AI!');
    console.log('\n🤖 Pro tip: Check .cursor/rules/ for AI development guidelines');
    
  } catch (error) {
    console.error('❌ Setup failed:', error.message);
  } finally {
    rl.close();
  }
}

setup(); 