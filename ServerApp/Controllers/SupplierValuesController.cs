using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using ServerApp.Models;
using ServerApp.Models.BindingTargets;
using Microsoft.AspNetCore.Authorization;

namespace ServerApp.Controllers {
    [Route("api/suppliers")]
    [Authorize(Roles = "Administrator")]
    public class SupplierValuesController : Controller {
        private DataContext _context;
        public SupplierValuesController(DataContext ctx) {
            _context = ctx;
        }

        [HttpGet]
        public IEnumerable<Supplier> GetSuppliers() {
            return _context.Suppliers;
        }

        [HttpPost]
        public IActionResult CreateSupplier([FromBody] SupplierData sData) {
            if (ModelState.IsValid) {
                Supplier s = sData.Supplier;
                _context.Add(s);
                _context.SaveChanges();
                return Ok(s.SupplierId);
            } else {
                return BadRequest(ModelState);
            }
        }

        [HttpPut("{id}")]
        public IActionResult ReplaceSupplier(long id, [FromBody] SupplierData sData) {
            if (ModelState.IsValid) {
                Supplier s = sData.Supplier;
                s.SupplierId = id;
                _context.Update(s);
                _context.SaveChanges();
                return Ok();
            } else {
                return BadRequest(ModelState);
            }
        }

        [HttpDelete("{id}")]
        public void DeleteSupplier(long id) {
            _context.Remove(new Supplier { SupplierId = id });
            _context.SaveChanges();
        }
    }
}