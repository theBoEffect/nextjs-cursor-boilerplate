# Cursor Rules Configuration Guide

This guide explains how to configure rule activation settings for optimal AI assistance in your Next.js project.

## 🎯 Rule Activation Settings

### **"Always" Rules** (Active in every conversation)
These rules are fundamental and should guide every AI interaction:

| Rule | Activation | Reason |
|------|------------|---------|
| `cursor-ai-optimization-rule` | `always` | Core AI interaction patterns |
| `environment-config-rule` | `always` | Security-critical |
| `test-driven-design-rule` | `always` | Quality assurance |
| `package-manager-rule` | `always` | Consistency critical |
| `minimal-code-changes` | `always` | Prevents over-engineering |
| `file-movement-rule` | `always` | Preserves history |
| `directory-documentation` | `always` | Maintains organization |
| `project-directory-structure` | `always` | Architecture consistency |
| `openai-concurrency-rule` | `always` | Performance patterns |

### **"Manual" Rules** (Activate when relevant)
These rules are context-specific and should be activated for relevant tasks:

| Rule | Activation | When to Use |
|------|------------|-------------|
| `big-feature-plan-rule` | `manual` | Complex features with 3+ components |
| `unit-test-rule` | `manual` | When tests are failing |
| `multi-file-change` | `manual` | Complex refactoring across files |
| `api-development-rule` | `manual` | Building or modifying API routes |

## ⚙️ How to Configure

### In Cursor IDE:
1. Open `.cursor/rules/[rule-name].mdc`
2. Add `activation: always` or `activation: manual` after the rule title
3. Save the file

### Example Configuration:
```markdown
# Rule: Test-Driven Design
activation: always
description: >
  When implementing new features, write unit tests first...
```

## 🎯 **Why These Settings?**

### **Always Active Rules**
- **Security**: Environment rules prevent accidental secret exposure
- **Quality**: TDD rules ensure robust code from the start  
- **Consistency**: Package manager and structure rules maintain standards
- **Efficiency**: AI optimization rules improve every interaction

### **Manual Rules**
- **Context-Specific**: Only relevant for certain types of work
- **Avoid Noise**: Don't overwhelm AI with irrelevant guidance
- **Flexibility**: Can be activated when needed

## 🚀 **Benefits of This Configuration**

1. **Security First**: Critical security rules are always enforced
2. **Quality Assurance**: TDD and minimal changes always applied
3. **Consistent Experience**: Core patterns followed in every session
4. **Contextual Guidance**: Specialized rules available when needed
5. **Optimal Performance**: AI gets relevant guidance without noise

## 🔧 **Customization Tips**

### For Different Project Types:
- **API-Heavy Projects**: Set `api-development-rule` to `always`
- **Component Libraries**: Set `directory-documentation` to `always`
- **Large Teams**: Set `multi-file-change` to `always`

### For Different Development Phases:
- **Early Development**: Keep most rules on `manual`
- **Production Projects**: Set security rules to `always`
- **Maintenance Phase**: Set `minimal-code-changes` to `always`

## 📋 **Quick Reference**

### Essential "Always" Rules:
```
cursor-ai-optimization-rule: always
environment-config-rule: always  
test-driven-design-rule: always
package-manager-rule: always
```

### Context-Specific "Manual" Rules:
```
big-feature-plan-rule: manual
api-development-rule: manual
unit-test-rule: manual
multi-file-change: manual
```

---

**Configure once, benefit from consistent AI assistance throughout your project! 🤖✨** 