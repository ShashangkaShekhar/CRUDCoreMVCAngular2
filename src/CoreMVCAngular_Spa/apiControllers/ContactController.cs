using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using CoreMVCAngular_Spa.Models.DbEntities;
using CoreMVCAngular_Spa.Utility;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace CoreMVCAngular_Spa.Controllers.api
{

    [Route("api/[controller]")]
    //[Route("api/[controller]"), Produces("application/json")]
    public class ContactController : Controller
    {
        private PhoneBookContext _ctx = null;
        public ContactController(PhoneBookContext context)
        {
            _ctx = context;
        }

        // GET: api/Contact/GetContact
        [HttpGet("GetContact"), Produces("application/json")]
        public async Task<object> GetContact()
        {
            List<Contacts> contacts = null;
            object result = null;
            try
            {
                using (_ctx)
                {
                    contacts = await _ctx.Contacts.ToListAsync();
                    result = new
                    {
                        contacts
                    };
                }
            }
            catch (Exception ex)
            {
                ex.ToString();
            }
            return contacts;
        }

        // GET api/Contact/GetContactByID/5
        [HttpGet("GetContactByID/{id}"), Produces("application/json")]
        public async Task<Contacts> GetContactByID(int id)
        {
            Contacts contact = null;
            try
            {
                using (_ctx)
                {
                    contact = await _ctx.Contacts.FirstOrDefaultAsync(x => x.ContactId == id);
                }
            }
            catch (Exception ex)
            {
                ex.ToString();
            }
            return contact;
        }

        // POST api/Contact/PostContact
        [HttpPost, Route("PostContact"), Produces("application/json")]
        public async Task<object> PostContact([FromBody]Contacts model)
        {
            object result = null; string message = "";
            if (model == null)
            {
                return BadRequest();
            }
            using (_ctx)
            {
                using (var _ctxTransaction = _ctx.Database.BeginTransaction())
                {
                    try
                    {
                        _ctx.Contacts.Add(model);
                        await _ctx.SaveChangesAsync();
                        _ctxTransaction.Commit();
                        message = "Saved Successfully";
                    }
                    catch (Exception e)
                    {
                        _ctxTransaction.Rollback();
                        e.ToString();
                        message = "Saved Error";
                    }

                    result = new
                    {
                        message
                    };
                }
            }
            return result;
        }

        // PUT api/Contact/PutContact/5
        [HttpPut, Route("PutContact/{id}")]
        public async Task<object> PutContact(int id, [FromBody]Contacts model)
        {
            object result = null; string message = "";
            if (model == null)
            {
                return BadRequest();
            }
            using (_ctx)
            {
                using (var _ctxTransaction = _ctx.Database.BeginTransaction())
                {
                    try
                    {
                        var entityUpdate = _ctx.Contacts.FirstOrDefault(x => x.ContactId == id);
                        if (entityUpdate != null)
                        {
                            entityUpdate.FirstName = model.FirstName;
                            entityUpdate.LastName = model.LastName;
                            entityUpdate.Phone = model.Phone;
                            entityUpdate.Email = model.Email;

                            await _ctx.SaveChangesAsync();
                        }
                        _ctxTransaction.Commit();
                        message = "Entry Updated";
                    }
                    catch (Exception e)
                    {
                        _ctxTransaction.Rollback(); e.ToString();
                        message = "Entry Update Failed!!";
                    }

                    result = new
                    {
                        message
                    };
                }
            }
            return result;
        }

        // DELETE api/Contact/DeleteContactByID/5
        [HttpDelete, Route("DeleteContactByID/{id}")]
        public async Task<object> DeleteContactByID(int id)
        {
            object result = null; string message = "";
            using (_ctx)
            {
                using (var _ctxTransaction = _ctx.Database.BeginTransaction())
                {
                    try
                    {
                        var idToRemove = _ctx.Contacts.SingleOrDefault(x => x.ContactId == id);
                        if (idToRemove != null)
                        {
                            _ctx.Contacts.Remove(idToRemove);
                            await _ctx.SaveChangesAsync();
                        }
                        _ctxTransaction.Commit();
                        message = "Deleted Successfully";
                    }
                    catch (Exception e)
                    {
                        _ctxTransaction.Rollback(); e.ToString();
                        message = "Error on Deleting!!";
                    }

                    result = new
                    {
                        message
                    };
                }
            }
            return result;
        }
    }
}
